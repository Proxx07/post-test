import { useState } from "react"

export const useFilter = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);

    const [sortField, setSortField] = useState<string>('');
    const [sortType, setSortType] = useState<string>('');

    const [search, serSearch] = useState<string>('');

    return {
        page, setPage,
        limit, setLimit,
        sortField, setSortField,
        sortType, setSortType,
        search, serSearch,
    }
}