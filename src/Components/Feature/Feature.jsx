import { FaCheckCircle } from "react-icons/fa";
const Feature = ({feature}) => {
    return (
        <p className="flex items-center gap-3">
            <FaCheckCircle className="text-green-700" /> <span className="text-xl">{feature}</span>
        </p>
    );
};

export default Feature;