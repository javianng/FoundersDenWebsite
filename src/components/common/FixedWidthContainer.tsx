type FixedWidthContainerProps = {
    children: React.ReactNode;
    outerclassname?: string;
    innerclassname?: string;
};

export default function FixedWidthContainer(props: FixedWidthContainerProps) {
    const {
        children,
        outerclassname,
        innerclassname,
    } = props;

    return (
        <div className={`flex justify-center ${outerclassname}`}>
            <div className={`w-screen max-w-7xl mx-12 my-5 ${innerclassname}`}>
                <div className="max-w-7xl">
                    {children}
                </div>
            </div>
        </div>
    );
}