import { useEffect, useMemo, useState } from "react"
import { IPost } from "../components/post/types";
import { useFilter } from "./useFilter.ts";
import $axios from "../api";

export const usePosts = () => {
    const {page, setPage, limit} = useFilter()

    const [isLoading, setLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<IPost[]>([]);
    
    const pagination = useMemo(() => {
        return {
            _page: page,
            _limit: limit,
        }
    }, [page, limit]);

    const fetchPosts = async () => {
        setLoading(true)
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            const result = await $axios.get<IPost[]>('/posts', {params: {...pagination}})
            setPosts(result.data)
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const handlePagination = (currentPage: number) => {
        if (currentPage) setPage(currentPage)
        //if (currLimit) setLimit(currLimit)
        
        fetchPosts()
    }


    return {
        posts,
        isLoading,

        page,
        limit,

        handlePagination,
    }
}