type Props = {
    children: React.ReactNode;
}

export const DefaultPageLayout = ({ children }: Props) => {
    return (
        <main className="h-full w-full max-w-[80rem] mx-auto my-8 px-4 py-10 bg-slate-50">
            {children}
        </main>
    )
}