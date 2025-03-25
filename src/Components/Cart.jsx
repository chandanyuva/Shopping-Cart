import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Cart = () => {
    return (
        <div className="flex justify-center">
            <Stack
                direction="row"
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Button>
                    <Link to="/">Home</Link>
                </Button>
                <Button>
                    <Link to="/Shop">Shop</Link>
                </Button>
                <Button>Cart</Button>
            </Stack>
        </div>
    );
};

export default Cart;
