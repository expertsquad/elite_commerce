import { server_api } from "@/constants";
import { revalidateTagAction } from "@/actions/revalidateTag";
import CustomInput from "../../../../Components/CustomInput";

const ServerAction = () => {
  async function addUserData(value: FormData) {
    "use server";
    const formData = new FormData();

    formData.set("profilePhoto", value.get("profilePhoto") as File);

    try {
      const res = await fetch(`${server_api}/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
          // Accept: "application/json",
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIycERoVjdmazhNIiwiX2lkIjoiNjYwOWE4NjY2NTJhZmQ2MDU2Y2RjNWQ4IiwiZnVsbE5hbWUiOiJBYmR1bCBrYXJpbSIsInJvbGUiOiJBZG1pbiIsImVtYWlsIjoibmlyaW1vbnBjQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiNjU0NTY0MzUiLCJpc1ZlcmlmaWVkIjp0cnVlLCJpYXQiOjE3MTc2ODAzODMsImV4cCI6MTcxNzc2Njc4M30.XC2ZmxZ7OWwwOQHQpfEkGv9NA-7toU-poMnjXr6eNaA",
        },

        body: formData,
      });
      const resData = await res.json();
      console.log(resData);
    } catch (err) {
      console.log(err);
    }

    revalidateTagAction("/profile");
  }

  return (
    <section>
      <div>Shipping Address</div>
      <form action={addUserData}>
        {/* <FileUploader
          name="profilePhoto"
          accept="image/*"
          data={"dfjdkfl"}
          className="w-16 h-8"
        ></FileUploader> */}

        <input type="file" name="profilePhoto" />

        <CustomInput
          placeholder="Full Name"
          label="Full Name"
          type="text"
          name="fullName"
        />

        <button
          className="px-7 py-3 bg-gradient-primary rounded-lg mt-2"
          type="submit"
        >
          Add{" "}
        </button>
      </form>
    </section>
  );
};

export default ServerAction;
