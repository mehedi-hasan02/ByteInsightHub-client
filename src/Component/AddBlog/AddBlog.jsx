import { useState } from "react";


const AddBlog = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleCountryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handelAddBlog = e => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const img = form.image.value;
        const category = selectedCategory;
        const shortDes = form.shortDescription.value;
        const longDes = form.longDescription.value;

        const blog = { title, img, category, shortDes, longDes }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
                // if (data.insertedId) {
                //     swal({
                //         title: "Success",
                //         text: "Added Successfully",
                //         icon: "success",
                //         dangerMode: true,
                //     })
                // }
            })

    }

    return (
        <section className=" p-6 mx-auto rounded-md shadow-md  mt-10">
            <h2 className="text-lg font-semibold  capitalize ">Add New Blog</h2>

            <form onSubmit={handelAddBlog}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Title</span>
                        </label>
                        <input name="title" type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Image URL</span>
                        </label>
                        <input name="image" type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Category</span>
                        </label>
                        <select className="select select-bordered w-full " onChange={handleCountryChange} value={selectedCategory} required>
                            <option value='' disabled>Select Category</option>
                            <option value='Robotic'>Robotic</option>
                            <option value='Artificial Intelligence'>Artificial Intelligence</option>
                            {/* <option value='Indonesia'>Indonesia</option>
                            <option value='Malaysia'>Malaysia</option>
                            <option value='Vietnam'>Vietnam</option>
                            <option value='Cambodia'>Cambodia</option> */}
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Short Description</span>
                        </label>
                        <textarea name="shortDescription" className="textarea textarea-bordered w-full" required></textarea>
                    </div>
                    <div className="col-span-2">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Long Description</span>
                        </label>
                        <textarea name="longDescription" className="textarea textarea-bordered w-full" required></textarea>
                    </div>
                </div>
                <input type="submit" value="Add Blog" className="btn btn-block bg-[#D2B48C] border border-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15] mt-6" />
                {/* <div className="flex justify-end mt-6">
                    <input type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</input>
                </div> */}
            </form>
        </section>
    );
};

export default AddBlog;