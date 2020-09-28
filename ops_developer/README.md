# Tech challenge for Sofware Developer for Operations team

A python program that read the tasks.yml file and write to the output the start order of the tasks.

Constraints for the program:
- Task can be started if all of its dependencies are started
- Multiple tasks should be started in parallel to optimize the time.
- Show the result of the start orders of tasks

Consider this *tasks.yml* file
```
tasks:
- name: A
  dependencies: []
- name: B
  dependencies: [A]
- name: C
  dependencies: [A]
- name: D
  dependencies: [B, C]
- name: E
- name: F
  dependencies: [D, E]
```

The optimized output must be:
```
[A,E]
[B,C]
[D]
[E]
```

The following points will be considered:
- Quality of code: readability, conciseness, maintainable
- Errors handing
