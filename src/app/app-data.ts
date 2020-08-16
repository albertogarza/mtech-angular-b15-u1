import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';

export class AppData implements InMemoryDbService{
  createDb(): {} {
    return {
      leagues: [
        {
          id: 1,
          name: 'Premier League',
          country: 'England',
          seasons: [
            {
              id: 10,
              name: 'Premier League 2019/20',
              clubs: [
                {
                  id: 1,
                  name: 'Aston Villa FC',
                  code: 'AVL',
                  country: 'England'
                },
                {
                  id: 2,
                  name: 'West Ham United FC',
                  code: 'WHU',
                  country: 'England'
                },
                {
                  id: 3,
                  name: 'Wolverhampton Wanderers FC',
                  code: 'WOL',
                  country: 'England'
                },
                {
                  id: 4,
                  name: 'Everton FC',
                  code: 'EVE',
                  country: 'England'
                },
                {
                  id: 5,
                  name: 'Tottenham Hotspur FC',
                  code: 'TOT',
                  country: 'England'
                },
                {
                  id: 6,
                  name: 'Manchester City FC',
                  code: 'MCI',
                  country: 'England'
                },
                {
                  id: 7,
                  name: 'Chelsea FC',
                  code: 'CHE',
                  country: 'England'
                },
                {
                  id: 8,
                  name: 'Liverpool FC',
                  code: 'LIV',
                  country: 'England'
                },
                {
                  id: 9,
                  name: 'Arsenal FC',
                  code: 'ARS',
                  country: 'England'
                },
                {
                  id: 10,
                  name: 'Manchester United FC',
                  code: 'MUN',
                  country: 'England'
                },
                {
                  id: 11,
                  name: 'Newcastle United FC',
                  code: 'NEW',
                  country: 'England'
                },
                {
                  id: 12,
                  name: 'Norwich City FC',
                  code: 'NOR',
                  country: 'England'
                },
                {
                  id: 13,
                  name: 'Watford FC',
                  code: 'WAT',
                  country: 'England'
                },
                {
                  id: 14,
                  name: 'Crystal Palace FC',
                  code: 'CRY',
                  country: 'England'
                },
                {
                  id: 15,
                  name: 'Leicester City FC',
                  code: 'LEI',
                  country: 'England'
                },
                {
                  id: 16,
                  name: 'Burnley FC',
                  code: 'BUR',
                  country: 'England'
                },
                {
                  id: 17,
                  name: 'Sheffield United FC',
                  code: 'SHU',
                  country: 'England'
                },
                {
                  id: 18,
                  name: 'Southampton FC',
                  code: 'SOU',
                  country: 'England'
                },
                {
                  id: 19,
                  name: 'Brighton & Hove Albion FC',
                  code: 'BHA',
                  country: 'England'
                },
                {
                  id: 20,
                  name: 'AFC Bournemouth',
                  code: 'BOU',
                  country: 'England'
                }
              ],
              rounds: [
                {
                  id: 1,
                  name: 'Matchday 1',
                  matches: [
                    {
                      id: 1,
                      date: '2019-08-09',
                      team1: 'Liverpool FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          4,
                          1
                        ]
                      }
                    },
                    {
                      id: 2,
                      date: '2019-08-10',
                      team1: 'West Ham United FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          0,
                          5
                        ]
                      }
                    },
                    {
                      id: 3,
                      date: '2019-08-10',
                      team1: 'Burnley FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 4,
                      date: '2019-08-10',
                      team1: 'Crystal Palace FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 5,
                      date: '2019-08-10',
                      team1: 'Watford FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 6,
                      date: '2019-08-10',
                      team1: 'AFC Bournemouth',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 7,
                      date: '2019-08-10',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 8,
                      date: '2019-08-11',
                      team1: 'Leicester City FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 9,
                      date: '2019-08-11',
                      team1: 'Newcastle United FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 10,
                      date: '2019-08-11',
                      team1: 'Manchester United FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 2,
                  name: 'Matchday 2',
                  matches: [
                    {
                      id: 11,
                      date: '2019-08-17',
                      team1: 'Arsenal FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 12,
                      date: '2019-08-17',
                      team1: 'Aston Villa FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 13,
                      date: '2019-08-17',
                      team1: 'Everton FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 14,
                      date: '2019-08-17',
                      team1: 'Norwich City FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 15,
                      date: '2019-08-17',
                      team1: 'Southampton FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 16,
                      date: '2019-08-17',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 17,
                      date: '2019-08-17',
                      team1: 'Manchester City FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 18,
                      date: '2019-08-18',
                      team1: 'Sheffield United FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 19,
                      date: '2019-08-18',
                      team1: 'Chelsea FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 20,
                      date: '2019-08-19',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 3,
                  name: 'Matchday 3',
                  matches: [
                    {
                      id: 21,
                      date: '2019-08-23',
                      team1: 'Aston Villa FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 22,
                      date: '2019-08-24',
                      team1: 'Norwich City FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          2,
                          3
                        ]
                      }
                    },
                    {
                      id: 23,
                      date: '2019-08-24',
                      team1: 'Manchester United FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 24,
                      date: '2019-08-24',
                      team1: 'Sheffield United FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 25,
                      date: '2019-08-24',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 26,
                      date: '2019-08-24',
                      team1: 'Watford FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    },
                    {
                      id: 27,
                      date: '2019-08-24',
                      team1: 'Liverpool FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 28,
                      date: '2019-08-25',
                      team1: 'AFC Bournemouth',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    },
                    {
                      id: 29,
                      date: '2019-08-25',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 30,
                      date: '2019-08-25',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 4,
                  name: 'Matchday 4',
                  matches: [
                    {
                      id: 31,
                      date: '2019-08-31',
                      team1: 'Southampton FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 32,
                      date: '2019-08-31',
                      team1: 'Manchester City FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 33,
                      date: '2019-08-31',
                      team1: 'Newcastle United FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 34,
                      date: '2019-08-31',
                      team1: 'Chelsea FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 35,
                      date: '2019-08-31',
                      team1: 'Leicester City FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 36,
                      date: '2019-08-31',
                      team1: 'West Ham United FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 37,
                      date: '2019-08-31',
                      team1: 'Crystal Palace FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 38,
                      date: '2019-08-31',
                      team1: 'Burnley FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 39,
                      date: '2019-09-01',
                      team1: 'Everton FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    },
                    {
                      id: 40,
                      date: '2019-09-01',
                      team1: 'Arsenal FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 5,
                  name: 'Matchday 5',
                  matches: [
                    {
                      id: 41,
                      date: '2019-09-14',
                      team1: 'Liverpool FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 42,
                      date: '2019-09-14',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          2,
                          5
                        ]
                      }
                    },
                    {
                      id: 43,
                      date: '2019-09-14',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 44,
                      date: '2019-09-14',
                      team1: 'Manchester United FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 45,
                      date: '2019-09-14',
                      team1: 'Sheffield United FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 46,
                      date: '2019-09-14',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 47,
                      date: '2019-09-14',
                      team1: 'Norwich City FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    },
                    {
                      id: 48,
                      date: '2019-09-15',
                      team1: 'AFC Bournemouth',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 49,
                      date: '2019-09-15',
                      team1: 'Watford FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 50,
                      date: '2019-09-16',
                      team1: 'Aston Villa FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 6,
                  name: 'Matchday 6',
                  matches: [
                    {
                      id: 51,
                      date: '2019-09-20',
                      team1: 'Southampton FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    },
                    {
                      id: 52,
                      date: '2019-09-21',
                      team1: 'Leicester City FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 53,
                      date: '2019-09-21',
                      team1: 'Manchester City FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          8,
                          0
                        ]
                      }
                    },
                    {
                      id: 54,
                      date: '2019-09-21',
                      team1: 'Everton FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 55,
                      date: '2019-09-21',
                      team1: 'Burnley FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 56,
                      date: '2019-09-21',
                      team1: 'Newcastle United FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 57,
                      date: '2019-09-22',
                      team1: 'West Ham United FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 58,
                      date: '2019-09-22',
                      team1: 'Crystal Palace FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 59,
                      date: '2019-09-22',
                      team1: 'Arsenal FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    },
                    {
                      id: 60,
                      date: '2019-09-22',
                      team1: 'Chelsea FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 7,
                  name: 'Matchday 7',
                  matches: [
                    {
                      id: 61,
                      date: '2019-09-28',
                      team1: 'Sheffield United FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 62,
                      date: '2019-09-28',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 63,
                      date: '2019-09-28',
                      team1: 'Aston Villa FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 64,
                      date: '2019-09-28',
                      team1: 'Chelsea FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 65,
                      date: '2019-09-28',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 66,
                      date: '2019-09-28',
                      team1: 'Crystal Palace FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 67,
                      date: '2019-09-28',
                      team1: 'AFC Bournemouth',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 68,
                      date: '2019-09-28',
                      team1: 'Everton FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    },
                    {
                      id: 69,
                      date: '2019-09-29',
                      team1: 'Leicester City FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          5,
                          0
                        ]
                      }
                    },
                    {
                      id: 70,
                      date: '2019-09-30',
                      team1: 'Manchester United FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 8,
                  name: 'Matchday 8',
                  matches: [
                    {
                      id: 71,
                      date: '2019-10-05',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 72,
                      date: '2019-10-05',
                      team1: 'Liverpool FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 73,
                      date: '2019-10-05',
                      team1: 'Norwich City FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          1,
                          5
                        ]
                      }
                    },
                    {
                      id: 74,
                      date: '2019-10-05',
                      team1: 'Burnley FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 75,
                      date: '2019-10-05',
                      team1: 'Watford FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 76,
                      date: '2019-10-05',
                      team1: 'West Ham United FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 77,
                      date: '2019-10-06',
                      team1: 'Manchester City FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 78,
                      date: '2019-10-06',
                      team1: 'Arsenal FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 79,
                      date: '2019-10-06',
                      team1: 'Southampton FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          1,
                          4
                        ]
                      }
                    },
                    {
                      id: 80,
                      date: '2019-10-06',
                      team1: 'Newcastle United FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 9,
                  name: 'Matchday 9',
                  matches: [
                    {
                      id: 81,
                      date: '2019-10-19',
                      team1: 'Everton FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 82,
                      date: '2019-10-19',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 83,
                      date: '2019-10-19',
                      team1: 'Aston Villa FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 84,
                      date: '2019-10-19',
                      team1: 'Chelsea FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 85,
                      date: '2019-10-19',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 86,
                      date: '2019-10-19',
                      team1: 'Leicester City FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 87,
                      date: '2019-10-19',
                      team1: 'AFC Bournemouth',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 88,
                      date: '2019-10-19',
                      team1: 'Crystal Palace FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 89,
                      date: '2019-10-20',
                      team1: 'Manchester United FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 90,
                      date: '2019-10-21',
                      team1: 'Sheffield United FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 10,
                  name: 'Matchday 10',
                  matches: [
                    {
                      id: 91,
                      date: '2019-10-25',
                      team1: 'Southampton FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          0,
                          9
                        ]
                      }
                    },
                    {
                      id: 92,
                      date: '2019-10-26',
                      team1: 'Manchester City FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 93,
                      date: '2019-10-26',
                      team1: 'West Ham United FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 94,
                      date: '2019-10-26',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    },
                    {
                      id: 95,
                      date: '2019-10-26',
                      team1: 'Watford FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 96,
                      date: '2019-10-26',
                      team1: 'Burnley FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          2,
                          4
                        ]
                      }
                    },
                    {
                      id: 97,
                      date: '2019-10-27',
                      team1: 'Newcastle United FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 98,
                      date: '2019-10-27',
                      team1: 'Liverpool FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 99,
                      date: '2019-10-27',
                      team1: 'Arsenal FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 100,
                      date: '2019-10-27',
                      team1: 'Norwich City FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 11,
                  name: 'Matchday 11',
                  matches: [
                    {
                      id: 101,
                      date: '2019-11-02',
                      team1: 'AFC Bournemouth',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 102,
                      date: '2019-11-02',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 103,
                      date: '2019-11-02',
                      team1: 'Aston Villa FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 104,
                      date: '2019-11-02',
                      team1: 'Manchester City FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 105,
                      date: '2019-11-02',
                      team1: 'Arsenal FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 106,
                      date: '2019-11-02',
                      team1: 'Sheffield United FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 107,
                      date: '2019-11-02',
                      team1: 'West Ham United FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          2,
                          3
                        ]
                      }
                    },
                    {
                      id: 108,
                      date: '2019-11-02',
                      team1: 'Watford FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 109,
                      date: '2019-11-03',
                      team1: 'Crystal Palace FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 110,
                      date: '2019-11-03',
                      team1: 'Everton FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 12,
                  name: 'Matchday 12',
                  matches: [
                    {
                      id: 111,
                      date: '2019-11-08',
                      team1: 'Norwich City FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 112,
                      date: '2019-11-09',
                      team1: 'Chelsea FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 113,
                      date: '2019-11-09',
                      team1: 'Newcastle United FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 114,
                      date: '2019-11-09',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 115,
                      date: '2019-11-09',
                      team1: 'Burnley FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 116,
                      date: '2019-11-09',
                      team1: 'Southampton FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 117,
                      date: '2019-11-09',
                      team1: 'Leicester City FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 118,
                      date: '2019-11-10',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 119,
                      date: '2019-11-10',
                      team1: 'Manchester United FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 120,
                      date: '2019-11-10',
                      team1: 'Liverpool FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 13,
                  name: 'Matchday 13',
                  matches: [
                    {
                      id: 121,
                      date: '2019-11-23',
                      team1: 'West Ham United FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          3
                        ]
                      }
                    },
                    {
                      id: 122,
                      date: '2019-11-23',
                      team1: 'Arsenal FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 123,
                      date: '2019-11-23',
                      team1: 'Everton FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 124,
                      date: '2019-11-23',
                      team1: 'Crystal Palace FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 125,
                      date: '2019-11-23',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 126,
                      date: '2019-11-23',
                      team1: 'Watford FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 127,
                      date: '2019-11-23',
                      team1: 'AFC Bournemouth',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 128,
                      date: '2019-11-23',
                      team1: 'Manchester City FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 129,
                      date: '2019-11-24',
                      team1: 'Sheffield United FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          3,
                          3
                        ]
                      }
                    },
                    {
                      id: 130,
                      date: '2019-11-25',
                      team1: 'Aston Villa FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 14,
                  name: 'Matchday 14',
                  matches: [
                    {
                      id: 131,
                      date: '2019-11-30',
                      team1: 'Newcastle United FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 132,
                      date: '2019-11-30',
                      team1: 'Liverpool FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 133,
                      date: '2019-11-30',
                      team1: 'Chelsea FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 134,
                      date: '2019-11-30',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    },
                    {
                      id: 135,
                      date: '2019-11-30',
                      team1: 'Burnley FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 136,
                      date: '2019-11-30',
                      team1: 'Southampton FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 137,
                      date: '2019-12-01',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 138,
                      date: '2019-12-01',
                      team1: 'Norwich City FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 139,
                      date: '2019-12-01',
                      team1: 'Manchester United FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 140,
                      date: '2019-12-01',
                      team1: 'Leicester City FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 15,
                  name: 'Matchday 15',
                  matches: [
                    {
                      id: 141,
                      date: '2019-12-03',
                      team1: 'Crystal Palace FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 142,
                      date: '2019-12-03',
                      team1: 'Burnley FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          1,
                          4
                        ]
                      }
                    },
                    {
                      id: 143,
                      date: '2019-12-04',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 144,
                      date: '2019-12-04',
                      team1: 'Manchester United FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 145,
                      date: '2019-12-04',
                      team1: 'Leicester City FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 146,
                      date: '2019-12-04',
                      team1: 'Chelsea FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 147,
                      date: '2019-12-04',
                      team1: 'Southampton FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 148,
                      date: '2019-12-04',
                      team1: 'Liverpool FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          5,
                          2
                        ]
                      }
                    },
                    {
                      id: 149,
                      date: '2019-12-05',
                      team1: 'Sheffield United FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 150,
                      date: '2019-12-05',
                      team1: 'Arsenal FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 16,
                  name: 'Matchday 16',
                  matches: [
                    {
                      id: 151,
                      date: '2019-12-07',
                      team1: 'Everton FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 152,
                      date: '2019-12-07',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          5,
                          0
                        ]
                      }
                    },
                    {
                      id: 153,
                      date: '2019-12-07',
                      team1: 'Watford FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 154,
                      date: '2019-12-07',
                      team1: 'AFC Bournemouth',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 155,
                      date: '2019-12-07',
                      team1: 'Manchester City FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 156,
                      date: '2019-12-08',
                      team1: 'Aston Villa FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          1,
                          4
                        ]
                      }
                    },
                    {
                      id: 157,
                      date: '2019-12-08',
                      team1: 'Newcastle United FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 158,
                      date: '2019-12-08',
                      team1: 'Norwich City FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 159,
                      date: '2019-12-08',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 160,
                      date: '2019-12-09',
                      team1: 'West Ham United FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 17,
                  name: 'Matchday 17',
                  matches: [
                    {
                      id: 161,
                      date: '2019-12-14',
                      team1: 'Liverpool FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 162,
                      date: '2019-12-14',
                      team1: 'Chelsea FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 163,
                      date: '2019-12-14',
                      team1: 'Sheffield United FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 164,
                      date: '2019-12-14',
                      team1: 'Leicester City FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 165,
                      date: '2019-12-14',
                      team1: 'Burnley FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 166,
                      date: '2019-12-14',
                      team1: 'Southampton FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 167,
                      date: '2019-12-15',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 168,
                      date: '2019-12-15',
                      team1: 'Manchester United FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 169,
                      date: '2019-12-15',
                      team1: 'Arsenal FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 170,
                      date: '2019-12-16',
                      team1: 'Crystal Palace FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 18,
                  name: 'Matchday 18',
                  matches: [
                    {
                      id: 171,
                      date: '2019-12-21',
                      team1: 'Everton FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 172,
                      date: '2019-12-21',
                      team1: 'Aston Villa FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    },
                    {
                      id: 173,
                      date: '2019-12-21',
                      team1: 'Newcastle United FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 174,
                      date: '2019-12-21',
                      team1: 'Norwich City FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 175,
                      date: '2019-12-21',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 176,
                      date: '2019-12-21',
                      team1: 'AFC Bournemouth',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 177,
                      date: '2019-12-21',
                      team1: 'Manchester City FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 178,
                      date: '2019-12-22',
                      team1: 'Watford FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 179,
                      date: '2019-12-22',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 180,
                      date: '2020-01-29',
                      team1: 'West Ham United FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 19,
                  name: 'Matchday 19',
                  matches: [
                    {
                      id: 181,
                      date: '2019-12-26',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 182,
                      date: '2019-12-26',
                      team1: 'Aston Villa FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 183,
                      date: '2019-12-26',
                      team1: 'Chelsea FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 184,
                      date: '2019-12-26',
                      team1: 'Everton FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 185,
                      date: '2019-12-26',
                      team1: 'Sheffield United FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 186,
                      date: '2019-12-26',
                      team1: 'Crystal Palace FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 187,
                      date: '2019-12-26',
                      team1: 'AFC Bournemouth',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 188,
                      date: '2019-12-26',
                      team1: 'Manchester United FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          4,
                          1
                        ]
                      }
                    },
                    {
                      id: 189,
                      date: '2019-12-26',
                      team1: 'Leicester City FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          4
                        ]
                      }
                    },
                    {
                      id: 190,
                      date: '2019-12-27',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 20,
                  name: 'Matchday 20',
                  matches: [
                    {
                      id: 191,
                      date: '2019-12-28',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 192,
                      date: '2019-12-28',
                      team1: 'Newcastle United FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 193,
                      date: '2019-12-28',
                      team1: 'Southampton FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 194,
                      date: '2019-12-28',
                      team1: 'Watford FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 195,
                      date: '2019-12-28',
                      team1: 'Norwich City FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 196,
                      date: '2019-12-28',
                      team1: 'West Ham United FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 197,
                      date: '2019-12-28',
                      team1: 'Burnley FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 198,
                      date: '2019-12-29',
                      team1: 'Arsenal FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 199,
                      date: '2019-12-29',
                      team1: 'Liverpool FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 200,
                      date: '2019-12-29',
                      team1: 'Manchester City FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 21,
                  name: 'Matchday 21',
                  matches: [
                    {
                      id: 201,
                      date: '2020-01-01',
                      team1: 'Burnley FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 202,
                      date: '2020-01-01',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 203,
                      date: '2020-01-01',
                      team1: 'Newcastle United FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 204,
                      date: '2020-01-01',
                      team1: 'Southampton FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 205,
                      date: '2020-01-01',
                      team1: 'Watford FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 206,
                      date: '2020-01-01',
                      team1: 'Manchester City FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 207,
                      date: '2020-01-01',
                      team1: 'Norwich City FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 208,
                      date: '2020-01-01',
                      team1: 'West Ham United FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 209,
                      date: '2020-01-01',
                      team1: 'Arsenal FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 210,
                      date: '2020-01-02',
                      team1: 'Liverpool FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 22,
                  name: 'Matchday 22',
                  matches: [
                    {
                      id: 211,
                      date: '2020-01-10',
                      team1: 'Sheffield United FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 212,
                      date: '2020-01-11',
                      team1: 'Crystal Palace FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 213,
                      date: '2020-01-11',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 214,
                      date: '2020-01-11',
                      team1: 'Chelsea FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 215,
                      date: '2020-01-11',
                      team1: 'Everton FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 216,
                      date: '2020-01-11',
                      team1: 'Manchester United FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 217,
                      date: '2020-01-11',
                      team1: 'Leicester City FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 218,
                      date: '2020-01-11',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 219,
                      date: '2020-01-12',
                      team1: 'AFC Bournemouth',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 220,
                      date: '2020-01-12',
                      team1: 'Aston Villa FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          1,
                          6
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 23,
                  name: 'Matchday 23',
                  matches: [
                    {
                      id: 221,
                      date: '2020-01-18',
                      team1: 'Watford FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 222,
                      date: '2020-01-18',
                      team1: 'Manchester City FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 223,
                      date: '2020-01-18',
                      team1: 'Arsenal FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 224,
                      date: '2020-01-18',
                      team1: 'Norwich City FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 225,
                      date: '2020-01-18',
                      team1: 'West Ham United FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 226,
                      date: '2020-01-18',
                      team1: 'Southampton FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          2,
                          3
                        ]
                      }
                    },
                    {
                      id: 227,
                      date: '2020-01-18',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 228,
                      date: '2020-01-18',
                      team1: 'Newcastle United FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 229,
                      date: '2020-01-19',
                      team1: 'Burnley FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 230,
                      date: '2020-01-19',
                      team1: 'Liverpool FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 24,
                  name: 'Matchday 24',
                  matches: [
                    {
                      id: 231,
                      date: '2020-01-21',
                      team1: 'Aston Villa FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 232,
                      date: '2020-01-21',
                      team1: 'Everton FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 233,
                      date: '2020-01-21',
                      team1: 'Sheffield United FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 234,
                      date: '2020-01-21',
                      team1: 'AFC Bournemouth',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 235,
                      date: '2020-01-21',
                      team1: 'Crystal Palace FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 236,
                      date: '2020-01-21',
                      team1: 'Chelsea FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 237,
                      date: '2020-01-22',
                      team1: 'Leicester City FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          4,
                          1
                        ]
                      }
                    },
                    {
                      id: 238,
                      date: '2020-01-22',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 239,
                      date: '2020-01-22',
                      team1: 'Manchester United FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 240,
                      date: '2020-01-23',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 25,
                  name: 'Matchday 25',
                  matches: [
                    {
                      id: 241,
                      date: '2020-02-01',
                      team1: 'Leicester City FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 242,
                      date: '2020-02-01',
                      team1: 'Liverpool FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 243,
                      date: '2020-02-01',
                      team1: 'Newcastle United FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 244,
                      date: '2020-02-01',
                      team1: 'West Ham United FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          3,
                          3
                        ]
                      }
                    },
                    {
                      id: 245,
                      date: '2020-02-01',
                      team1: 'Crystal Palace FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 246,
                      date: '2020-02-01',
                      team1: 'Watford FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          2,
                          3
                        ]
                      }
                    },
                    {
                      id: 247,
                      date: '2020-02-01',
                      team1: 'AFC Bournemouth',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 248,
                      date: '2020-02-01',
                      team1: 'Manchester United FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 249,
                      date: '2020-02-02',
                      team1: 'Burnley FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 250,
                      date: '2020-02-02',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 26,
                  name: 'Matchday 26',
                  matches: [
                    {
                      id: 251,
                      date: '2020-02-08',
                      team1: 'Everton FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 252,
                      date: '2020-02-08',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 253,
                      date: '2020-02-09',
                      team1: 'Sheffield United FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 254,
                      date: '2020-02-14',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 255,
                      date: '2020-02-15',
                      team1: 'Southampton FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 256,
                      date: '2020-02-15',
                      team1: 'Norwich City FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 257,
                      date: '2020-02-16',
                      team1: 'Aston Villa FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          3
                        ]
                      }
                    },
                    {
                      id: 258,
                      date: '2020-02-16',
                      team1: 'Arsenal FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 259,
                      date: '2020-02-17',
                      team1: 'Chelsea FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 260,
                      date: '2020-02-19',
                      team1: 'Manchester City FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 27,
                  name: 'Matchday 27',
                  matches: [
                    {
                      id: 261,
                      date: '2020-02-22',
                      team1: 'Chelsea FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 262,
                      date: '2020-02-22',
                      team1: 'Sheffield United FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 263,
                      date: '2020-02-22',
                      team1: 'Burnley FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 264,
                      date: '2020-02-22',
                      team1: 'Southampton FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 265,
                      date: '2020-02-22',
                      team1: 'Crystal Palace FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 266,
                      date: '2020-02-22',
                      team1: 'Leicester City FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 267,
                      date: '2020-02-23',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 268,
                      date: '2020-02-23',
                      team1: 'Manchester United FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 269,
                      date: '2020-02-23',
                      team1: 'Arsenal FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    },
                    {
                      id: 270,
                      date: '2020-02-24',
                      team1: 'Liverpool FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 28,
                  name: 'Matchday 28',
                  matches: [
                    {
                      id: 271,
                      date: '2020-02-28',
                      team1: 'Norwich City FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 272,
                      date: '2020-02-29',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 273,
                      date: '2020-02-29',
                      team1: 'Newcastle United FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 274,
                      date: '2020-02-29',
                      team1: 'West Ham United FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 275,
                      date: '2020-02-29',
                      team1: 'AFC Bournemouth',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 276,
                      date: '2020-02-29',
                      team1: 'Watford FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 277,
                      date: '2020-03-01',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          2,
                          3
                        ]
                      }
                    },
                    {
                      id: 278,
                      date: '2020-03-01',
                      team1: 'Everton FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 279,
                      date: '2020-06-17',
                      team1: 'Aston Villa FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 280,
                      date: '2020-06-17',
                      team1: 'Manchester City FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 29,
                  name: 'Matchday 29',
                  matches: [
                    {
                      id: 281,
                      date: '2020-03-07',
                      team1: 'Liverpool FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 282,
                      date: '2020-03-07',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 283,
                      date: '2020-03-07',
                      team1: 'Arsenal FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 284,
                      date: '2020-03-07',
                      team1: 'Sheffield United FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 285,
                      date: '2020-03-07',
                      team1: 'Southampton FC',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 286,
                      date: '2020-03-07',
                      team1: 'Crystal Palace FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 287,
                      date: '2020-03-07',
                      team1: 'Burnley FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 288,
                      date: '2020-03-08',
                      team1: 'Chelsea FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 289,
                      date: '2020-03-08',
                      team1: 'Manchester United FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 290,
                      date: '2020-03-09',
                      team1: 'Leicester City FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 30,
                  name: 'Matchday 30',
                  matches: [
                    {
                      id: 291,
                      date: '2020-06-19',
                      team1: 'Norwich City FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 292,
                      date: '2020-06-19',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 293,
                      date: '2020-06-20',
                      team1: 'Watford FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 294,
                      date: '2020-06-20',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 295,
                      date: '2020-06-20',
                      team1: 'West Ham United FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 296,
                      date: '2020-06-20',
                      team1: 'AFC Bournemouth',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 297,
                      date: '2020-06-21',
                      team1: 'Newcastle United FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 298,
                      date: '2020-06-21',
                      team1: 'Aston Villa FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          1,
                          2
                        ]
                      }
                    },
                    {
                      id: 299,
                      date: '2020-06-21',
                      team1: 'Everton FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 300,
                      date: '2020-06-22',
                      team1: 'Manchester City FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          5,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 31,
                  name: 'Matchday 31',
                  matches: [
                    {
                      id: 301,
                      date: '2020-06-23',
                      team1: 'Leicester City FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          0,
                          0
                        ]
                      }
                    },
                    {
                      id: 302,
                      date: '2020-06-23',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 303,
                      date: '2020-06-24',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 304,
                      date: '2020-06-24',
                      team1: 'Newcastle United FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 305,
                      date: '2020-06-24',
                      team1: 'Manchester United FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 306,
                      date: '2020-06-24',
                      team1: 'Norwich City FC',
                      team2: 'Everton FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 307,
                      date: '2020-06-24',
                      team1: 'Liverpool FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 308,
                      date: '2020-06-25',
                      team1: 'Burnley FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 309,
                      date: '2020-06-25',
                      team1: 'Southampton FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 310,
                      date: '2020-06-25',
                      team1: 'Chelsea FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 32,
                  name: 'Matchday 32',
                  matches: [
                    {
                      id: 311,
                      date: '2020-06-27',
                      team1: 'Aston Villa FC',
                      team2: 'Wolverhampton Wanderers FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 312,
                      date: '2020-06-28',
                      team1: 'Watford FC',
                      team2: 'Southampton FC',
                      score: {
                        ft: [
                          1,
                          3
                        ]
                      }
                    },
                    {
                      id: 313,
                      date: '2020-06-29',
                      team1: 'Crystal Palace FC',
                      team2: 'Burnley FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 314,
                      date: '2020-06-30',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Manchester United FC',
                      score: {
                        ft: [
                          0,
                          3
                        ]
                      }
                    },
                    {
                      id: 315,
                      date: '2020-07-01',
                      team1: 'Arsenal FC',
                      team2: 'Norwich City FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    },
                    {
                      id: 316,
                      date: '2020-07-01',
                      team1: 'Everton FC',
                      team2: 'Leicester City FC',
                      score: {
                        ft: [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      id: 317,
                      date: '2020-07-01',
                      team1: 'AFC Bournemouth',
                      team2: 'Newcastle United FC',
                      score: {
                        ft: [
                          1,
                          4
                        ]
                      }
                    },
                    {
                      id: 318,
                      date: '2020-07-01',
                      team1: 'West Ham United FC',
                      team2: 'Chelsea FC',
                      score: {
                        ft: [
                          3,
                          2
                        ]
                      }
                    },
                    {
                      id: 319,
                      date: '2020-07-02',
                      team1: 'Sheffield United FC',
                      team2: 'Tottenham Hotspur FC',
                      score: {
                        ft: [
                          3,
                          1
                        ]
                      }
                    },
                    {
                      id: 320,
                      date: '2020-07-02',
                      team1: 'Manchester City FC',
                      team2: 'Liverpool FC',
                      score: {
                        ft: [
                          4,
                          0
                        ]
                      }
                    }
                  ]
                },
                {
                  id: 33,
                  name: 'Matchday 33',
                  matches: [
                    {
                      id: 321,
                      date: '2020-07-04',
                      team1: 'Norwich City FC',
                      team2: 'Brighton & Hove Albion FC',
                      score: {
                        ft: [
                          0,
                          1
                        ]
                      }
                    },
                    {
                      id: 322,
                      date: '2020-07-04',
                      team1: 'Manchester United FC',
                      team2: 'AFC Bournemouth',
                      score: {
                        ft: [
                          5,
                          2
                        ]
                      }
                    },
                    {
                      id: 323,
                      date: '2020-07-04',
                      team1: 'Leicester City FC',
                      team2: 'Crystal Palace FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 324,
                      date: '2020-07-04',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Arsenal FC',
                      score: {
                        ft: [
                          0,
                          2
                        ]
                      }
                    },
                    {
                      id: 325,
                      date: '2020-07-04',
                      team1: 'Chelsea FC',
                      team2: 'Watford FC',
                      score: {
                        ft: [
                          3,
                          0
                        ]
                      }
                    },
                    {
                      id: 326,
                      date: '2020-07-05',
                      team1: 'Burnley FC',
                      team2: 'Sheffield United FC',
                      score: {
                        ft: [
                          1,
                          1
                        ]
                      }
                    },
                    {
                      id: 327,
                      date: '2020-07-05',
                      team1: 'Newcastle United FC',
                      team2: 'West Ham United FC',
                      score: {
                        ft: [
                          2,
                          2
                        ]
                      }
                    },
                    {
                      id: 328,
                      date: '2020-07-05',
                      team1: 'Liverpool FC',
                      team2: 'Aston Villa FC',
                      score: {
                        ft: [
                          2,
                          0
                        ]
                      }
                    },
                    {
                      id: 329,
                      date: '2020-07-05',
                      team1: 'Southampton FC',
                      team2: 'Manchester City FC',
                      score: {
                        ft: [
                          1,
                          0
                        ]
                      }
                    },
                    {
                      id: 330,
                      date: '2020-07-06',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Everton FC'
                    }
                  ]
                },
                {
                  id: 34,
                  name: 'Matchday 34',
                  matches: [
                    {
                      id: 331,
                      date: '2020-07-07',
                      team1: 'Crystal Palace FC',
                      team2: 'Chelsea FC'
                    },
                    {
                      id: 332,
                      date: '2020-07-07',
                      team1: 'Watford FC',
                      team2: 'Norwich City FC'
                    },
                    {
                      id: 333,
                      date: '2020-07-07',
                      team1: 'Arsenal FC',
                      team2: 'Leicester City FC'
                    },
                    {
                      id: 334,
                      date: '2020-07-08',
                      team1: 'Manchester City FC',
                      team2: 'Newcastle United FC'
                    },
                    {
                      id: 335,
                      date: '2020-07-08',
                      team1: 'Sheffield United FC',
                      team2: 'Wolverhampton Wanderers FC'
                    },
                    {
                      id: 336,
                      date: '2020-07-08',
                      team1: 'West Ham United FC',
                      team2: 'Burnley FC'
                    },
                    {
                      id: 337,
                      date: '2020-07-08',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Liverpool FC'
                    },
                    {
                      id: 338,
                      date: '2020-07-09',
                      team1: 'Everton FC',
                      team2: 'Southampton FC'
                    },
                    {
                      id: 339,
                      date: '2020-07-09',
                      team1: 'AFC Bournemouth',
                      team2: 'Tottenham Hotspur FC'
                    },
                    {
                      id: 340,
                      date: '2020-07-09',
                      team1: 'Aston Villa FC',
                      team2: 'Manchester United FC'
                    }
                  ]
                },
                {
                  id: 35,
                  name: 'Matchday 35',
                  matches: [
                    {
                      id: 341,
                      date: '2020-07-11',
                      team1: 'Norwich City FC',
                      team2: 'West Ham United FC'
                    },
                    {
                      id: 342,
                      date: '2020-07-11',
                      team1: 'Watford FC',
                      team2: 'Newcastle United FC'
                    },
                    {
                      id: 343,
                      date: '2020-07-11',
                      team1: 'Liverpool FC',
                      team2: 'Burnley FC'
                    },
                    {
                      id: 344,
                      date: '2020-07-11',
                      team1: 'Sheffield United FC',
                      team2: 'Chelsea FC'
                    },
                    {
                      id: 345,
                      date: '2020-07-11',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Manchester City FC'
                    },
                    {
                      id: 346,
                      date: '2020-07-12',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Everton FC'
                    },
                    {
                      id: 347,
                      date: '2020-07-12',
                      team1: 'Aston Villa FC',
                      team2: 'Crystal Palace FC'
                    },
                    {
                      id: 348,
                      date: '2020-07-12',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Arsenal FC'
                    },
                    {
                      id: 349,
                      date: '2020-07-12',
                      team1: 'AFC Bournemouth',
                      team2: 'Leicester City FC'
                    },
                    {
                      id: 350,
                      date: '2020-07-13',
                      team1: 'Manchester United FC',
                      team2: 'Southampton FC'
                    }
                  ]
                },
                {
                  id: 36,
                  name: 'Matchday 36',
                  matches: [
                    {
                      id: 351,
                      date: '2020-07-15',
                      team1: 'Manchester City FC',
                      team2: 'AFC Bournemouth'
                    },
                    {
                      id: 352,
                      date: '2020-07-15',
                      team1: 'Newcastle United FC',
                      team2: 'Tottenham Hotspur FC'
                    },
                    {
                      id: 353,
                      date: '2020-07-15',
                      team1: 'Arsenal FC',
                      team2: 'Liverpool FC'
                    },
                    {
                      id: 354,
                      date: '2020-07-15',
                      team1: 'Chelsea FC',
                      team2: 'Norwich City FC'
                    },
                    {
                      id: 355,
                      date: '2020-07-15',
                      team1: 'Everton FC',
                      team2: 'Aston Villa FC'
                    },
                    {
                      id: 356,
                      date: '2020-07-15',
                      team1: 'Leicester City FC',
                      team2: 'Sheffield United FC'
                    },
                    {
                      id: 357,
                      date: '2020-07-15',
                      team1: 'Burnley FC',
                      team2: 'Wolverhampton Wanderers FC'
                    },
                    {
                      id: 358,
                      date: '2020-07-15',
                      team1: 'West Ham United FC',
                      team2: 'Watford FC'
                    },
                    {
                      id: 359,
                      date: '2020-07-15',
                      team1: 'Southampton FC',
                      team2: 'Brighton & Hove Albion FC'
                    },
                    {
                      id: 360,
                      date: '2020-07-15',
                      team1: 'Crystal Palace FC',
                      team2: 'Manchester United FC'
                    }
                  ]
                },
                {
                  id: 37,
                  name: 'Matchday 37',
                  matches: [
                    {
                      id: 361,
                      date: '2020-07-18',
                      team1: 'Tottenham Hotspur FC',
                      team2: 'Leicester City FC'
                    },
                    {
                      id: 362,
                      date: '2020-07-18',
                      team1: 'Manchester United FC',
                      team2: 'West Ham United FC'
                    },
                    {
                      id: 363,
                      date: '2020-07-18',
                      team1: 'Norwich City FC',
                      team2: 'Burnley FC'
                    },
                    {
                      id: 364,
                      date: '2020-07-18',
                      team1: 'Sheffield United FC',
                      team2: 'Everton FC'
                    },
                    {
                      id: 365,
                      date: '2020-07-18',
                      team1: 'Brighton & Hove Albion FC',
                      team2: 'Newcastle United FC'
                    },
                    {
                      id: 366,
                      date: '2020-07-18',
                      team1: 'Watford FC',
                      team2: 'Manchester City FC'
                    },
                    {
                      id: 367,
                      date: '2020-07-18',
                      team1: 'AFC Bournemouth',
                      team2: 'Southampton FC'
                    },
                    {
                      id: 368,
                      date: '2020-07-18',
                      team1: 'Wolverhampton Wanderers FC',
                      team2: 'Crystal Palace FC'
                    },
                    {
                      id: 369,
                      date: '2020-07-18',
                      team1: 'Aston Villa FC',
                      team2: 'Arsenal FC'
                    },
                    {
                      id: 370,
                      date: '2020-07-18',
                      team1: 'Liverpool FC',
                      team2: 'Chelsea FC'
                    }
                  ]
                },
                {
                  id: 38,
                  name: 'Matchday 38',
                  matches: [
                    {
                      id: 371,
                      date: '2020-07-25',
                      team1: 'Manchester City FC',
                      team2: 'Norwich City FC'
                    },
                    {
                      id: 372,
                      date: '2020-07-25',
                      team1: 'Newcastle United FC',
                      team2: 'Liverpool FC'
                    },
                    {
                      id: 373,
                      date: '2020-07-25',
                      team1: 'Arsenal FC',
                      team2: 'Watford FC'
                    },
                    {
                      id: 374,
                      date: '2020-07-25',
                      team1: 'Chelsea FC',
                      team2: 'Wolverhampton Wanderers FC'
                    },
                    {
                      id: 375,
                      date: '2020-07-25',
                      team1: 'Everton FC',
                      team2: 'AFC Bournemouth'
                    },
                    {
                      id: 376,
                      date: '2020-07-25',
                      team1: 'Leicester City FC',
                      team2: 'Manchester United FC'
                    },
                    {
                      id: 377,
                      date: '2020-07-25',
                      team1: 'Burnley FC',
                      team2: 'Brighton & Hove Albion FC'
                    },
                    {
                      id: 378,
                      date: '2020-07-25',
                      team1: 'West Ham United FC',
                      team2: 'Aston Villa FC'
                    },
                    {
                      id: 379,
                      date: '2020-07-25',
                      team1: 'Southampton FC',
                      team2: 'Sheffield United FC'
                    },
                    {
                      id: 380,
                      date: '2020-07-25',
                      team1: 'Crystal Palace FC',
                      team2: 'Tottenham Hotspur FC'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'La Liga',
          country: 'Spain'
        },
        {
          id: 3,
          name: 'Serie A',
          country: 'Italy'
        }
      ]
    };
  }
}

export class League {
  id: number;
  name: string;
  country: string;
}

export class Club {
  id: number;
  name: string;
  code: string;
  country: string;
}
