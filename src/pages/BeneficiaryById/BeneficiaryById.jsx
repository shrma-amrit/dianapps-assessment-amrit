import { useParams } from "react-router-dom";
import "./BeneficiaryById.css";
import { selectBeneficiaryById } from "../../features/manageBeneficiaries/manageBeneficiariesSelectors";
import { useSelector } from "react-redux";
import NotFound from "../NotFound/NotFound";
import { BeneficiaryCard } from "../../components/BeneficiaryCard";

function BeneficiaryById() {
  const params = useParams();

  const beneficiary = useSelector(selectBeneficiaryById(params.id));

  return (
    <>
      {beneficiary ? (
        <BeneficiaryCard beneficiary={beneficiary} />
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default BeneficiaryById;
