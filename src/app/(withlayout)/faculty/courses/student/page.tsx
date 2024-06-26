"use client";
import { FC, useState } from "react";
import { Button, Input } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import { useFacultyCourseStudentsQuery } from "@/redux/api/facultyApi";
import Link from "next/link";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";

interface FacultyCoursesStudentsPageProps {
  searchParams: {
    courseId?: string;
    offeredCourseSectionId?: string;
  };
}

const FacultyCoursesStudentsPage: FC<FacultyCoursesStudentsPageProps> = ({
  searchParams,
}) => {
  const { courseId, offeredCourseSectionId } = searchParams;

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  if (courseId) {
    query["courseId"] = courseId;
  }
  if (offeredCourseSectionId) {
    query["offeredCourseSectionId"] = offeredCourseSectionId;
  }

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useFacultyCourseStudentsQuery({ ...query });

  const myCourseStudents = data?.myCourseStudents;
  const meta = data?.meta;

  const columns = [
    {
      title: "Student Name",
      render: (data: any) => (
        <>
          {data?.firstName} {data?.middleName} {data?.lastName}
        </>
      ),
    },
    {
      title: "Student ID",
      dataIndex: "studentId",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      render: (data: any) => (
        <div key="1" style={{ margin: "20px 0px" }}>
          <Link
            href={`/faculty/student-result?studentId=${data.id}&courseId=${courseId}&offeredCourseSectionId=${offeredCourseSectionId}`}
          >
            <Button type="primary">View Marks</Button>
          </Link>
        </div>
      ),
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: "faculty", link: "/faculty" },
          { label: "courses", link: "/faculty/courses" },
        ]}
      />
      <ActionBar title="My Course Students">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "20%" }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={myCourseStudents}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default FacultyCoursesStudentsPage;
