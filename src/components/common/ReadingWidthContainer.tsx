type ReadingWidthContainerProps = {
    children: React.ReactNode;
};

export default function ReadingWidthContainer(props: ReadingWidthContainerProps) {
    const {
        children,
    } = props;

    return (
        <div className="flex justify-center">
            <div className="w-screen max-w-4xl m-12">
                <div className="max-w-7xl">
                    {children}
                </div>
            </div>
        </div>
    );
}