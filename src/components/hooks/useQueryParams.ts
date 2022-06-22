import { useEffect, useState } from "react";

export const useQueryParams = (): {
    params: Record<string, string>;
} => {
    const [params, setParams] = useState<Record<string, string>>({});

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setParams(Object.fromEntries(urlParams));
    }, []);
    return {
        params
    };
};
