import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
    const loadedData = useLoaderData();
    const oldCategory = loadedData?.category;
    console.log(oldCategory);
    const [selectedCategory, setSelectedCategory] = useState(oldCategory);
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const navigate = useNavigate();

    const handelUpdateBlog = async e =>{
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const img = form.image.value;
        const category = selectedCategory;
        const shortDes = form.shortDescription.value;
        const longDes = form.longDescription.value;

        const blog = { title, img, category, shortDes, longDes }

        try {
            const { data } = await axios.put(
              `http://localhost:8000/blogs/${loadedData?._id}`,
              blog
            )
            console.log(data)
            toast.success('Job Data Updated Successfully!')
            navigate('/')
          } catch (err) {
            console.log(err)
            toast.error(err.message)
          }
    }

    return (
        <section className=" p-6 mx-auto rounded-md shadow-md  mt-10">
            <h2 className="text-4xl font-semibold  capitalize text-center">Update Blog</h2>

            <form onSubmit={handelUpdateBlog}>
                <div className="lg:grid lg:grid-cols-2 gap-5">
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Title</span>
                        </label>
                        <input name="title" type="text" defaultValue={loadedData?.title} className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Image URL</span>
                        </label>
                        <input name="image" type="text" defaultValue={loadedData?.image} className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Category</span>
                        </label>
                        <select className="select select-bordered w-full " onChange={handleCategoryChange} value={selectedCategory} required>
                            {/* <option value='' disabled>Select Category</option> */}
                            <option value='Robotic'>Robotic</option>
                            <option value='Artificial Intelligence'>Artificial Intelligence</option>
                            <option value='Machine Learning'>Machine Learning</option>

                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short Description</span>
                        </label>
                        <textarea name="shortDescription" defaultValue={loadedData?.short_description} className="textarea textarea-bordered w-full h-[23px]" required></textarea>
                    </div>
                    <div className="col-span-2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Long Description</span>
                        </label>
                        <textarea name="longDescription" defaultValue={loadedData?.long_description} className="textarea textarea-bordered w-full" required></textarea>
                    </div>
                </div>
                <input type="submit" value="Update Blog" className="btn btn-block bg-[#D2B48C] border border-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15] mt-6" />
            </form>
        </section>
    );
};

export default UpdateBlog;