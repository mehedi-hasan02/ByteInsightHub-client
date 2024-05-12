import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MUIDataTable from "mui-datatables";

const FeatureBlogs = () => {
  const { data: blogs } = useQuery({
    queryKey: ['topPost'],
    queryFn: async () => {
      const res = await fetch('http://localhost:8000/topPost');
      return res.json();
    }
  })
  const data = blogs ? blogs.map(blog => {
    return { image: blog.image, title: blog.title }
  }) : [];
  const columns = [
    {
      name: "image",
      label: "Profile Picture",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (data) => {
          return (
            <Avatar variant="rounded" src={data} >
            </Avatar>

          )
        }
      }
    },
    {
      name: "name",
      label: "Blog Owner",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (data) => {
          return (
            <Avatar variant="rounded" src={data} >
            </Avatar>

          )
        }
      }
    },
    {
      name: "title",
      label: "Blog Title",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (data) => {
          return (
            <p>{data}</p>

          )
        }
      }
    },


  ];

  const options = {
    selectableRows: false
  };
  return (
    <div>
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default FeatureBlogs;