The problem arises because Presidio's DATE_TIME entity detection is recognizing parts of the longer dates as separate entities, causing the split of what is logically one date into multiple entities, e.g.:
'July 22,'
'2025'
'July 22'
'2026'
instead of the full correct dates 'July 22, 2025' and 'July 22, 2026'.
Why does this happen?
Presidio's out-of-the-box date detection sometimes segments dates with punctuation or multiple date parts into separate entities, especially when commas separate parts or there's adjacent whitespace/punctuation. It may tag "July 22," as one entity and "2025" as another.


Issues
- Dateoffset check??
- 


def is_relaxed_date(dt_str):
    dt_str = dt_str.strip().lower()
    ignore_patterns = [
        "year-old",
        "weeks ago",
        "months ago",
        "days ago",
        "age ",
        "last year",
        "last month",
        "last week",
        "today",
        "yesterday",
        "ago",
    ]
    try:
        n = int(dt_str)
        if 0 <= n <= 120:
            return True
    except ValueError:
        pass
    return any(pat in dt_str for pat in ignore_patterns)



- DOB
-- should truncated to year --> find dob and check the year, if you just check str(dob.year) in text causes issue
-- because year value kese bhi form me text me ho skti he

- DateTime
["January 1, 1986", "July 22, 2025", "July 22, 2026"]
["January 1, 1986 and July 22, 2025", "July 22, 2026", "39-year-old"]
