import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export default function loginPage({
    pageComponentProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
        Register
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return {
        props: {
            pageComponentProps: ""
        }
    }
}