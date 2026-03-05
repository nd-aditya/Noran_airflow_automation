import re

DATE_PATTERN_NOTES = (
    # 1. ISO style: YYYY-MM-DD with optional time and fractional seconds
    r"\b\d{4}-(?:0?[1-9]|1[0-2])-(?:0?[1-9]|[12]\d|3[01])"
    r"(?:\s\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?)?\b|"

    # 2. ISO slash/dash: YYYY/MM/DD or YYYY-DD-MM
    r"(?<!\d)\d{4}[/-](?:0?[1-9]|1[0-2])[/-](?:0?[1-9]|[12]\d|3[01])(?!\d)|"
    r"(?<!\d)\d{4}[/-](?:0?[1-9]|[12]\d|3[01])[/-](?:0?[1-9]|1[0-2])(?!\d)|"

    # 3. US style: MM/DD/YYYY or MM-DD-YYYY or MM.DD.YYYY
    r"(?<!\d)(?:0?[1-9]|1[0-2])[\/\-.](?:0?[1-9]|[12]\d|3[01])[\/\-.]\d{4}(?!\d)|"

    # 4. Day first: DD/MM/YYYY or DD-MM-YYYY
    r"(?<!\d)(?:0?[1-9]|[12]\d|3[01])[\/\-.](?:0?[1-9]|1[0-2])[\/\-.]\d{4}(?!\d)|"

    # 5. Two-digit year versions (MM/DD/YY, DD/MM/YY)
    r"(?<!\d)(?:0?[1-9]|1[0-2])[\/\-.](?:0?[1-9]|[12]\d|3[01])[\/\-.]\d{2}(?!\d)|"
    r"(?<!\d)(?:0?[1-9]|[12]\d|3[01])[\/\-.](?:0?[1-9]|1[0-2])[\/\-.]\d{2}(?!\d)|"

    # 6. Month name based formats
    r"\b\d{1,2}\s(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
    r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
    r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)\s\d{4}\b|"

    r"\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
    r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
    r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)\s\d{1,2}"
    r"(?:st|nd|rd|th)?[,/\s-]?\s?\d{4}\b|"

    r"\b(?:January|February|March|April|May|June|July|August|September|"
    r"October|November|December)\s\d{1,2},?\s\d{4}\b|"

    r"\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.\s\d{1,2}\.\d{4}\b|"

    # 6. Day-MonthName-Year and Day-MonthAbbr-Year (e.g. 01-Sep-1981, 2-Jan-2000, 01-SEP-1981, etc.)
    r"\b(?:0?[1-9]|[12]\d|3[01])[-](?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
    r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
    r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)[-]\d{4}\b|"
    r"\b(?:0?[1-9]|[12]\d|3[01])[-](?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-]\d{4}\b"

    #7. Compact numeric formats — risky, keep at the end
    #r"\b\d{4}\d{2}\d{2}(?!\d)\b|"  # YYYYMMDD
    #r"\b(?:0?[1-9]|[12]\d|3[01])(?:0?[1-9]|1[0-2])\d{4}(?!\d)\b|"  # DDMMYYYY
    #r"\b(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{4}(?!\d)\b"  # MMDDYYYY
)

# DATE_PATTERN_NOTES = (
#     # 1. ISO style: YYYY-MM-DD with optional time and fractional seconds
#     r"\b\d{4}-(?:0?[1-9]|1[0-2])-(?:0?[1-9]|[12]\d|3[01])"
#     r"(?:\s\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?)?\b|"

#     # 2. US style and common separators: MM/DD/YYYY or MM-DD-YYYY or MM.DD.YYYY
#     r"\b(?:0?[1-9]|1[0-2])[/-](?:0?[1-9]|[12]\d|3[01])[/-]\d{4}\b|"
#     r"\b(?:0?[1-9]|1[0-2])\.(?:0?[1-9]|[12]\d|3[01])\.\d{4}\b|"

#     # 3. Two-digit year versions: MM/DD/YY or MM-DD-YY
#     r"\b(?:0?[1-9]|1[0-2])[/-](?:0?[1-9]|[12]\d|3[01])[/-]\d{2}\b|"

#     # 4. Day first (DD/MM/YYYY or DD-MM-YYYY)
#     r"\b(?:0?[1-9]|[12]\d|3[01])[/-](?:0?[1-9]|1[0-2])[/-]\d{4}\b|"

#     # 5. Month name based formats
#     r"\b\d{1,2}\s(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
#     r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
#     r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)\s\d{4}\b|"

#     r"\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
#     r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
#     r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)\s\d{1,2}"
#     r"(?:st|nd|rd|th)?[,/\s-]?\s?\d{4}\b|"

#     r"\b(?:January|February|March|April|May|June|July|August|September|"
#     r"October|November|December)\s\d{1,2},?\s\d{4}\b|"

#     r"\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.\s\d{1,2}\.\d{4}\b"

#     #7. Compact numeric formats — risky, keep at the end
#     #r"\b\d{4}\d{2}\d{2}(?!\d)\b|"  # YYYYMMDD
#     #r"\b(?:0?[1-9]|[12]\d|3[01])(?:0?[1-9]|1[0-2])\d{4}(?!\d)\b|"  # DDMMYYYY
#     #r"\b(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{4}(?!\d)\b"  # MMDDYYYY
# )s

DATE_PATTERN_GENERAL = (
    # 1. ISO style: YYYY-MM-DD with optional time and fractional seconds
    r"\b\d{4}-(?:0?[1-9]|1[0-2])-(?:0?[1-9]|[12]\d|3[01])"
    r"(?:\s\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?)?\b|"

    # 2. US style and common separators: MM/DD/YYYY or MM-DD-YYYY or MM.DD.YYYY
    r"\b(?:0?[1-9]|1[0-2])[/-](?:0?[1-9]|[12]\d|3[01])[/-]\d{4}\b|"
    r"\b(?:0?[1-9]|1[0-2])\.(?:0?[1-9]|[12]\d|3[01])\.\d{4}\b|"

    # 3. Two-digit year versions: MM/DD/YY or MM-DD-YY
    r"\b(?:0?[1-9]|1[0-2])[/-](?:0?[1-9]|[12]\d|3[01])[/-]\d{2}\b|"

    # 4. Day first (DD/MM/YYYY or DD-MM-YYYY)
    r"\b(?:0?[1-9]|[12]\d|3[01])[/-](?:0?[1-9]|1[0-2])[/-]\d{4}\b|"

    # 5. Month name based formats
    r"\b\d{1,2}\s(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
    r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
    r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)\s\d{4}\b|"

    r"\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
    r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
    r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)\s\d{1,2}"
    r"(?:st|nd|rd|th)?[,/\s-]?\s?\d{4}\b|"

    r"\b(?:January|February|March|April|May|June|July|August|September|"
    r"October|November|December)\s\d{1,2},?\s\d{4}\b|"

    r"\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.\s\d{1,2}\.\d{4}\b|"

    # 6. Day-MonthAbbr-Year or Day-MonthName-Year (e.g. 01-Sep-1981, 2-Jan-2000, 01-sept-1981)
    r"\b(?:0?[1-9]|[12]\d|3[01])[-](?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|"
    r"May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t)?(?:ember)?|"
    r"Oct(?:ober)?|Nov(?:ember)|Dec(?:ember)?)[-]\d{4}\b|"
    r"\b(?:0?[1-9]|[12]\d|3[01])[-](?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[-]\d{4}\b|"
    # 6b. Day-lowercase month name-Year (e.g. 01-sept-1981)
    r"\b(?:0?[1-9]|[12]\d|3[01])[-](?:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[-]\d{4}\b|"

    # 6c. Day-MONTHABBR-UPPER-Year (optionally with time, e.g. 25-FEB-2000 04:31:01 pm)
    r"\b(?:0?[1-9]|[12]\d|3[01])[-](?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|SEPT|OCT|NOV|DEC)[-]\d{4}\b"
    r"(?:\s+\d{2}:\d{2}(?::\d{2})?(?:\s*(?:AM|PM|am|pm))?)?\b|"

    # Also day-month(short)-year with lowercase or mixed case and time
    r"\b(?:0?[1-9]|[12]\d|3[01])[-](?:[Jj]an|[Ff]eb|[Mm]ar|[Aa]pr|[Mm]ay|[Jj]un|[Jj]ul|[Aa]ug|[Ss]ep(?:t)?|[Oo]ct|[Nn]ov|[Dd]ec)[-]\d{4}"
    r"(?:\s+\d{2}:\d{2}(?::\d{2})?(?:\s*(?:AM|PM|am|pm))?)?\b|"

    #7. Compact numeric formats — risky, keep at the end
    r"\b(?:0?[1-9]|1[0-2])(?:0?[1-9]|[12]\d|3[01])\d{4}\b|"         # MMDDYYYY
    r"\b\d{4}(?:0?[1-9]|1[0-2])(?:0?[1-9]|[12]\d|3[01])\b|"         # YYYYMMDD
    r"\b(?:0?[1-9]|[12]\d|3[01])(?:0?[1-9]|1[0-2])\d{4}\b|"         # DDMMYYYY
    r"\b\d{14}\b|"                                                   # YYYYMMDDHHMMSS
    r"\b\d{8}T\d{6}\b|"                                              # YYYYMMDDTHHMMSS
    r"\b\d{4}[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12]\d|3[01])\b|"     # YYYY-MM-DD or YYYY/MM/DD
    r"\b(0?[1-9]|[12]\d|3[01])[-/](0?[1-9]|1[0-2])[-/]\d{4}\b|"     # DD-MM-YYYY or DD/MM/YYYY
    r"\b(0?[1-9]|1[0-2])[-/](0?[1-9]|[12]\d|3[01])[-/]\d{4}\b|"     # MM-DD-YYYY or MM/DD/YYYY
    r"\b\d{4}[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12]\d|3[01])[ T]\d{2}:\d{2}:\d{2}\b"  # YYYY-MM-DD HH:MM:SS
)



ZIP_CODE_PATTERNS = {
    "US": re.compile(r"^(\d{3})(\d{2})(?:-\d{4})?$"),  # Matches 12345 and 12345-6789,
    # add more countries her, e.g.
    "CA": re.compile(r"^([A-Z]\d[A-Z]) ?\d[A-Z]\d$"),
}
