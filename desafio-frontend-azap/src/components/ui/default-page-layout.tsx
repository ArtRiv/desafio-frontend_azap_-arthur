type Props = {
    children: React.ReactNode;
}

export const DefaultPageLayout = ({ children }: Props) => {
    return (
        <main className="h-full w-full max-w-[100rem] mx-auto my-8 px-16 py-20">
            {children}
        </main>
    )
}