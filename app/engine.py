from statistics import mean


def cusum(series, threshold=5.0, drift=0.5):
    if len(series) < 2:
        return []
    cumulative = series[0]
    pos = 0.0
    neg = 0.0
    changes = []

    for idx in range(1, len(series)):
        ref_mean = cumulative / idx
        value = series[idx]
        pos = max(0.0, pos + value - ref_mean - drift)
        neg = min(0.0, neg + value - ref_mean + drift)
        if pos > threshold:
            changes.append({"index": idx, "direction": "up", "value": value})
            pos = 0.0
        if abs(neg) > threshold:
            changes.append({"index": idx, "direction": "down", "value": value})
            neg = 0.0
        cumulative += value
    return changes
