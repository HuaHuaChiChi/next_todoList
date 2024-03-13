import { CompanyInfo } from "@/type/companyInfoType";

export async function GET(request: Request) {
  const response = await fetch(`${process.env.REACT_APP_DB_URL}/companyInfo`);
  const companyInfo: CompanyInfo = await response.json();

  if (!companyInfo) {
    return new Response("companyInfo is not found", {
      status: 404,
    });
  }

  return Response.json({
    companyInfo,
  });
}
