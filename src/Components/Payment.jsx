import { useLocation } from "react-router-dom";

function Payment() {
    const location = useLocation();
    const cost = location.state?.totalCost || 0;
    return (
        <div className="text-center">
            <h1>Checkout successful with Total billing cost of : {cost}</h1>
            <h4>This is test project and actual payments is not implemented</h4>
        </div>
    );
}

export default Payment;
