"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { useFacultiesQuery } from "@/redux/api/facultyApi";
import { useDebounced } from "@/redux/hooks";
import { IDepartment } from "@/types";
import { ReloadOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const { Option } = Select;

const FacultyPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  if (selectedDepartment) {
    query["searchTerm"] = selectedDepartment;
  }

  const { data, isLoading } = useFacultiesQuery({ ...query });

  const faculties = data?.faculties;
  const meta = data?.meta;
  console.log(faculties, " this is faculties");

  const columns = [
    {
      title: "Id",
      dataIndex: "facultyId",
      sorter: true,
    },
    {
      title: "Name",
      render: function (data: Record<string, string>) {
        const fullName = `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
        return <>{fullName}</>;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Department",
      dataIndex: "academicDepartment",
      render: function (data: IDepartment) {
        return <>{data?.title}</>;
      },
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return <></>;
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
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
    setSelectedDepartment("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
        ]}
      />
      <ActionBar title="Faculty List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
            marginRight: "10px",
          }}
        />
        <Select
          size="large"
          placeholder="Select Department"
          onChange={(value) => setSelectedDepartment(value)}
          style={{
            width: "20%",
            marginRight: "10px",
          }}
          allowClear
        >
          <Option value="">select</Option>

          <Option value="EEE">EEE</Option>
          <Option value="CSE">CSE</Option>
          <Option value="Human">HUMAN</Option>
        </Select>
        <div>
          <Link href="/admin/manage-faculty/create">
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy ||
            !!sortOrder ||
            !!searchTerm ||
            !!selectedDepartment) && (
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
        dataSource={faculties}
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

export default FacultyPage;
