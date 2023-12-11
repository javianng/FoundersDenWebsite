type FixedWidthContainerProps = {
    children: React.ReactNode;
};

export default function FixedWidthContainer(props: FixedWidthContainerProps) {
    const {
        children,
    } = props;

    return (
        <div className="flex justify-center">
            <div className="w-screen max-w-7xl">
                <div className="max-w-7xl">
                    {children}
                </div>
            </div>
        </div>
    );
}