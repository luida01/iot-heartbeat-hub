export function getStatus(now: Date, lastSeenAt: Date | null): "ONLINE" | "OFFLINE" {
    if (!lastSeenAt) {
        return "OFFLINE";
    }

    const diffMs = now.getTime() - lastSeenAt.getTime();
    const diffSeconds = diffMs / 1000;

    if (diffSeconds < 60) {
        return "ONLINE";
    }

    return "OFFLINE";
}
