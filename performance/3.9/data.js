window.BENCHMARK_DATA = {
  "lastUpdate": 1671725122459,
  "repoUrl": "https://github.com/konradhalas/dacite",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "contact@mciszczon.pl",
            "name": "Mateusz Ciszczoń",
            "username": "mciszczon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a86ef2036b60e9a008714ac9d0919f18529203fc",
          "message": "Add performance testing (#202)\n\n* Add pytest-benchmark to setup.py\r\n\r\n* Add pre-commit with black\r\n\r\n* Add pytest benchmark config to pyproject.toml\r\n\r\n* Update gitignore\r\n\r\n* Add performance tests\r\n\r\n* Add performance check to CI action\r\n\r\n* Rename publish to Publish\r\n\r\n* Remove performance Github Pages push\r\n\r\n* Set auto-push explicitly to false\r\n\r\n* Change gh-pages branch to master\r\n\r\n* Configure performance CI step further\r\n\r\n* Fix gh-pages for benchmark\r\n\r\n* Split gh-pages by Python version\r\n\r\n* Remove docs/benchmark dir\r\n\r\n* Add performance test for multiple items parsing\r\n\r\n* Update README.md with performance testing\r\n\r\n* Change GITHUB_TOKEN to BENCHMARK_TOKEN\r\n\r\n* Setup Github Actions not to publish performance on PR tests\r\n\r\n* Do not publish performance for PR runs, only compare performance to the master branch",
          "timestamp": "2022-12-22T17:04:25+01:00",
          "tree_id": "f5d80531a2bf409b0362d7802461fed1c2f9df81",
          "url": "https://github.com/konradhalas/dacite/commit/a86ef2036b60e9a008714ac9d0919f18529203fc"
        },
        "date": 1671725121407,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/performance/test_performance.py::test_basic_scenario",
            "value": 2142.6345437031423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002760057094735483",
            "extra": "mean: 466.7151488520704 usec\nrounds: 1263"
          },
          {
            "name": "tests/performance/test_performance.py::test_union_matching",
            "value": 1631.0507873159418,
            "unit": "iter/sec",
            "range": "stddev: 0.00014562930487661303",
            "extra": "mean: 613.1016935687211 usec\nrounds: 1586"
          },
          {
            "name": "tests/performance/test_performance.py::test_strict_unions_match",
            "value": 148.45903923662752,
            "unit": "iter/sec",
            "range": "stddev: 0.00029605172044947826",
            "extra": "mean: 6.73586468794338 msec\nrounds: 141"
          },
          {
            "name": "tests/performance/test_performance.py::test_collection_of_union",
            "value": 1233.7321445546418,
            "unit": "iter/sec",
            "range": "stddev: 0.00019559559726171633",
            "extra": "mean: 810.5487114149761 usec\nrounds: 1244"
          },
          {
            "name": "tests/performance/test_performance.py::test_type_hooks",
            "value": 1854.4907149468913,
            "unit": "iter/sec",
            "range": "stddev: 0.00010641838641904423",
            "extra": "mean: 539.2316024772537 usec\nrounds: 1776"
          },
          {
            "name": "tests/performance/test_performance.py::test_casting",
            "value": 16087.18393259665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034545485480057",
            "extra": "mean: 62.16128342846571 usec\nrounds: 9124"
          },
          {
            "name": "tests/performance/test_performance.py::test_forward_references",
            "value": 1407.820439972463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000925158966729005",
            "extra": "mean: 710.3178584476015 usec\nrounds: 1314"
          },
          {
            "name": "tests/performance/test_performance.py::test_parsing_multiple_items",
            "value": 66.9533196173809,
            "unit": "iter/sec",
            "range": "stddev: 0.0007150359785191927",
            "extra": "mean: 14.93577922222101 msec\nrounds: 63"
          }
        ]
      }
    ]
  }
}