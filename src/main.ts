class employee {
  constructor(
    public name: string,
    private salary: number = 10000,
    readonly stack: string[],
    protected level: "junior" | "mid" | "senior"
  ) {
    this.name = name;
    this.salary = salary;
    this.stack = stack;
    this.level = level;
  }

  paySalary = () => {
    console.log(`the salary of ${this.name} is ${this.salary}`);
  };
}

const arsam = new employee("arasm", 12000, ["react", "html", "css"], "junior");
arsam.paySalary()