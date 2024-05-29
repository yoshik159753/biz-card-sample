import { CompanyOverview } from "@/app/ui/company-overview";
import {
  ProfileCompany,
  ProfileHeaderLogo,
  ProfileLogo,
  ProfileLayout,
  ProfileUser,
} from "@/app/ui/profile";
import {
  companyOverviewStyle,
  containerStyle,
  profileContainerStyle,
} from "@/app/ui/style";

export default async function Owner() {
  return (
    <>
      <div className={containerStyle}>
        <div className={profileContainerStyle}>
          <ProfileLayout>
            <ProfileHeaderLogo />
            <ProfileLogo />
            <div className="mt-8">
              <ProfileUser />
            </div>
            <ProfileCompany />
          </ProfileLayout>
        </div>
        <div className={companyOverviewStyle}>
          <CompanyOverview />
        </div>
      </div>
    </>
  );
}
