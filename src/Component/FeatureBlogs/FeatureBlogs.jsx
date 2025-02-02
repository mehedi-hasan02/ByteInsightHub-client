import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MUIDataTable from "mui-datatables";

const FeatureBlogs = () => {
  const { data: blogs } = useQuery({
    queryKey: ['topPost'],
    queryFn: async () => {
      const res = await fetch('https://blog-server-side-phi.vercel.app/topPost');
      return res.json();
    }
  })

  console.log(blogs);

  const data = blogs ? blogs.map(blog => {
    return {
      image: blog.writerImage,
      title: blog.title,
      name: blog.writerName
    }
  }) : [];
  const columns = [
    {
      name: "serialNumber",
      label: "Serial Number",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return (
            <p className="lg:mr-40 lg:ml-10 text-center">{tableMeta.rowIndex + 1}</p>
          );
        }
      }
    },
    {
      name: "image",
      label: "Profile Picture",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (data) => {
          return (
            <Avatar className="lg:mr-48  ml-10" variant="rounded" src={data} >
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
            <p className="lg:mr-40 lg:ml-0 text-center">{data}</p>

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
            <p >{data}</p>

          )
        }
      }
    },


  ];

  const options = {
    selectableRows: false
  };
  return (
    <div className="mt-10 mb-5">
      <div className="text-center mb-5"><h1 className="text-2xl md:top-3xl lg:text-4xl font-bold">Top Post</h1></div>
      <MUIDataTable
        title={""}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default FeatureBlogs;