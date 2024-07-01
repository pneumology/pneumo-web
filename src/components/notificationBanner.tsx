import data from "../lib/content.json";

const NotificationBanner = () => {
    return (
        <>
            {data.notification_banner.enabled && (
                <div className="border rounded border-dashed border-grey h-fit px-3 py-2.5 w-full mt-2.5 bg-grey/10 text-grey">
                    <p className="">{data.notification_banner.message}</p>
                </div>
            )}
        </>
    );
};

export default NotificationBanner;
