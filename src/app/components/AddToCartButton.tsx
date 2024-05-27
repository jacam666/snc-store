import React from "react";
import { Button } from "@nextui-org/react";

export default function AddToCartButton() {
    return (
        <div className="flex justify-center w-full my-4">
            <Button color="primary" className="w-1/2">
                Add to Cart
            </Button>
        </div>
    );
}
