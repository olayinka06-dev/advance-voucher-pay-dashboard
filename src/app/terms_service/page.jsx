import MainTermsService from "@/components/terms-service-component/MainTermsService";
import TermsServiceHero from "@/components/terms-service-component/TermsServiceHero";

const TermsServicePage = () => {
    return(
        <div className="container">
            <TermsServiceHero/>
            <MainTermsService/>
        </div>
    )
}
export default TermsServicePage;