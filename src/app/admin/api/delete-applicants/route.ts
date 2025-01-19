import dbConnect from "@/lib/dbConnect";
import User from "@/model/User";

export async function DELETE(request: Request) {
  await dbConnect();

  try {
    const { email, mobile } = await request.json();

    if (!email && !mobile) {
      return new Response(
        JSON.stringify({ message: "Email or mobile number is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const query: Partial<{ email: string; mobile: string }> = {};
    if (typeof email === "string") {
      query.email = email;
    }
    if (typeof mobile === "string") {
      query.mobile = mobile;
    }

    const result = await User.deleteOne(query);
    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response(JSON.stringify({ error: "Failed to delete user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
