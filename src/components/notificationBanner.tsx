import data from "../lib/content.json";

const NotificationBanner = () => {
    return (
        <>
            {data.notification_banner.enabled && (
                <div className="border rounded border-dashed border-red h-fit px-3 py-2.5 w-full mt-2.5 bg-red/10 text-red">
                    <p className="">{data.notification_banner.message}</p>
                </div>
            )}
        </>
    );
};

export default NotificationBanner;
