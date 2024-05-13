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
            <p>{data}</p>

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
    <div className="mt-10 mb-5">
      <MUIDataTable
        title={"Top Post"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default FeatureBlogs;