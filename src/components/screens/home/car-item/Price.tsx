import React, { FC } from "react";

const Price: FC<{ price: number }> = ({ price }) => {
    return (
        <p>
            {new Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
            }).format(price)}
        </p>
    );
};

export default React.memo(Price);
