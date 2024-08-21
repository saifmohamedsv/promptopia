import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: any, res: any) {
  // console.log("Sessiopn");
  // const session = await getServerSession(req, res, authOptions);
  // console.log(session);

  return Response.json({ msg: "123" }, { status: 200 });
}
