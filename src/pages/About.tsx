import { Card } from "react-bootstrap";

export function About() {
  return (
    <Card className='d-flex justify-content-center'>
      <Card.Title>About</Card.Title>
      <p>
        This page was made using React with TypeScript. the UI ws made using
        react-bootstrap, with logic for functionality using hooks. the items are
        saved using local storage. the items are displayed using json on the
        backend.
      </p>
      <img src='data:image/jpeg;base64,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e9ZdBP0rUZ9PNb7Akg89iPSbTst4GpU3fE1StXSzU6Rt+7JHhd1B+oc1B99pyue5fUhXZuXPZ0clqYinhaeFpGouhSdNO6kuzamZ2G53J2vawHvOR8uxC6XOIdHHk5Y+u4bY+ksduFsNclQUvzCnb2APIegihwvQU3Yu9vws3h+bbn5JlLhNsolRZJ5bOpwfVxToWrVNaclJUaj7EW2Hmb3konyqgCw2n3NEVhYNUY7VjJmIiSJCIiAIiIAiIgCIiAYmvzrHChRepzIGw82JCqPuRNhNLxRg3rUdKLqOoEi4Gwv5/ErsbUW12Rlna8EAyimSzVX8T3LUg24aqedVvMLfb1Nhym94WwDmtrYbU7knzYqVA97En/ObjLMmIsWTQbDVfSx+Lbf5zfUKCoulRYfxPmfWYaaJzkpS4SKq6tuMlY8RltOojxNUbUeZ9vQACSLgzIQtBmrKGFWx0MNtIvYkeZv9rTeY7JaVRgxBB1BvS/tNmigAAdNhL6qGpuUj2btfupVcOPn+DX4TKKdI+DWFHJNRKD2Uz6xOVI51DwnmdgQfcGbCZls6K5rbJLB5zlJ8tmnweUtTq953lxpK6dNha9+d/PebiJmdqqjXHbHo4J8soOxn1EtBwUsMiklUVSTckKASbWuSOZnPEQBERAEREAREQBMETMwTAILxlg1polLDAiviqoSkoP0Na9SsCNwFQG/uPSSzKsAmHo06NP6aaBB62HM26ncn1M6OW4R3qtia66XIKUUNr06d77kf7x7AtY7AKOhm8kYxS6IpLsTMRJEhERAEREAREQBERAEREAREQBMTMQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//Z' />
    </Card>
  );
}
