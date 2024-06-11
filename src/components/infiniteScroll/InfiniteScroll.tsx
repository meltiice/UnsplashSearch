import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

export const InfiniteScroll = ({loadMore} : Props) => {
    const [ref, inView] = useInView({});
    useEffect(() => {
        if (inView) {
            loadMore();
        }
    }, [inView, loadMore])

    return <div ref={ref} style={{height: "10px" }}></div>
}

type Props = {
    loadMore: () => void,
}