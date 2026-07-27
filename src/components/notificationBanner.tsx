import data from "../lib/content.json";

const NotificationBanner = () => {
    const message = data.notification_banner.message;
    const messageLines = Array.isArray(message)
        ? message
        : String(message).split(/\n+/);

    return (
        <>
            {data.notification_banner.enabled && (
                <div className="border rounded border-dashed border-red h-fit px-3 py-2.5 w-full mt-2.5 bg-red/10 text-red">
                    {messageLines.map((line, index) => (
                        <p className="mb-2" key={index}>
                            {line}
                        </p>
                    ))}
                </div>
            )}
        </>
    );
};

export default NotificationBanner;
