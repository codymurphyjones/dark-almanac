import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  return NextResponse.json(`{
    "Date": '01/12/2021',
    "Description": "Description",
    "Hours": "2",
    "Minutes": "30",
    "Property Address": "125 Folsom St",
    "Team Member": "Cody Jones",
    "Material": "material",
    "Activity Group": "group",
    "Activity Subcategory": "subcategory"
}`);
}
