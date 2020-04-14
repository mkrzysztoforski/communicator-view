export class AlgorithmsService {
    public diffrence(a, b) {
        function comparer(otherArray) {
            return (current) => {
                return otherArray.filter((other) => {
                    return other.text === current.text
                        && other.date === current.date
                        && other.author === current.author;
                }).length === 0;
            };
        }

        const onlyInA = a.filter(comparer(b));
        const onlyInB = b.filter(comparer(a));

        return onlyInA.concat(onlyInB);
    }
}
