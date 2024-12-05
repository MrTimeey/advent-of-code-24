const isValidLine = (pageLine, parsedRules) => {
    for (const pageNumber of pageLine) {
        const relevantRules = parsedRules.filter(e => e.includes(pageNumber))
        for (const [first, second] of relevantRules) {
            const firstIndex = pageLine.indexOf(first);
            const secondIndex = pageLine.indexOf(second);
            if (firstIndex === -1 || secondIndex === -1) continue
            if (firstIndex > secondIndex) {
                return false
            }
        }
    }
    return true
}

export const pt1 = (rules, pages) => {
    const parsedRules = rules.map(r => r.split('|'))
    const parsedPages = pages.map(r => r.split(','))
    return parsedPages
        .filter(p => isValidLine(p, parsedRules))
        .map(l => +l[Math.trunc(l.length / 2)])
        .reduce((acc, val) => acc + val, 0)
}

export const pt2 = (rules, pages) => {
    const parsedRules = rules.map(r => r.split('|'))
    const parsedPages = pages.map(r => r.split(','))
    const invalidLines = parsedPages
        .filter(p => !isValidLine(p, parsedRules))

    const sortLine = (a, b) => {
        const rule = parsedRules.find(r => r.includes(a) && r.includes(b))
        if (!rule) return 0
        const [_, second] = rule
        return b === second ? -1 : 1;
    };
    return invalidLines
        .map(l => l.sort(sortLine))
        .map(l => +l[Math.trunc(l.length / 2)])
        .reduce((acc, val) => acc + val, 0);
}

