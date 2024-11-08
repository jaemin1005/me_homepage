const MAX_VALUE = 100;

interface ChartData {
  data: number[];
  label: string;
  id: string;
}

interface ISkillChart {
  name: string;
  rows: string[];
  skills: ISkillInfo[];
  explain: string[];
}

interface ISkillInfo {
  name: string;
  values: Map<string, number>;
}

export class SkillInfo implements ISkillInfo {
  name: string;
  values: Map<string, number>;

  constructor(name: string) {
    this.name = name;
    this.values = new Map();
  }

  pushValue(key: string, value: number) {
    if (value > 100) value = MAX_VALUE;
    this.values.set(key, value);
  }
}

export class SkillChart implements ISkillChart {
  name: string;
  rows: string[];
  skills: SkillInfo[];
  explain: string[];

  constructor(
    name: string,
    rows: string[],
    skills: SkillInfo[],
    explain: string[]
  ) {
    this.name = name;
    this.rows = rows;
    this.skills = skills;
    this.explain = explain;
  }

  makeChartdatas(): ChartData[] {
    const returnDatas: ChartData[] = [];

    this.skills.forEach((skill, idx) => {
      const datas: number[] = [];
      this.rows.forEach((row) => {
        const data = skill.values.get(row);
        if (data === undefined) datas[datas.length] = 0;
        else datas[datas.length] = data;
      });

      returnDatas[returnDatas.length] = {
        data: datas,
        label: skill.name,
        id: `${idx}_id`,
      };
    });

    return returnDatas;
  }
}
