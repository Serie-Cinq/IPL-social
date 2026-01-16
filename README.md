# IPL Social - Email Validator

**Author**: Amine Elmohor
**Vinci Email**: amine.elmohor@vinci.be
**GitHub Repository**: [https://github.com/Serie-Cinq/IPL-social](https://github.com/Serie-Cinq/IPL-social)

---

## Description

This project implements an **email validation function** in **TypeScript**, following **Test-Driven Development (TDD)** principles. The function checks if a given string is a valid email address based on the following rules:
- Must contain at least one `@`.
- Must contain at least one dot (`.`) in the domain part (after the `@`).
- Must not contain any spaces.
- Must have text before and after the `@`.
- The dot (`.`) must not be the last character in the domain.

The project also includes a **CI pipeline** using **GitHub Actions** to automatically run tests on every push.

---

## How to Run Tests

To execute the tests, use the following command:

```bash
npm test