## There's no example for it yet

### Basic Matchers

.not
.resolves
.rejects
expect(value)

### Very Speciffic or not yet understood

expect.anything() // **(should be called "expect.something"**)
expect.extend(matchers)
expect.addSnapshotSerializer(serializer)
.toContainEqual(item)
expect.assertions(number)
expect.hasAssertions()
expect.closeTo(number, numDigits?)
expect.objectContaining(object)
expect.not.objectContaining(object)
expect.not.stringContaining(string)
expect.stringMatching(string | regexp)
expect.not.stringMatching(string | regexp)

.toThrow(error?)
.toThrowErrorMatchingSnapshot(hint?)
.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)

### Snapshot Related Matchers

.toMatchSnapshot(propertyMatchers?, hint?)
.toMatchInlineSnapshot(propertyMatchers?,inlineSnapshot)

#### to use with a mock function

.toHaveBeenCalled()
.toHaveBeenCalledTimes(number)
.toHaveBeenCalledWith(arg1, arg2, ...)
.toHaveBeenLastCalledWith(arg1, arg2, ...)
.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)

.toHaveReturned()
.toHaveReturnedTimes(number)
.toHaveReturnedWith(value)
.toHaveLastReturnedWith(value)
.toHaveNthReturnedWith(nthCall, value)

### They don't work for some reason

expect.stringContaining(string)

### Class Related Matchers

.toBeInstanceOf(Class)
expect.any(constructor)

//
//
//
//
//
//

## Already an example

#### logic

.toEqual(value)
.toBeGreaterThan(number | bigint)
.toBeGreaterThanOrEqual(number | bigint)
.toBeLessThan(number | bigint)
.toBeLessThanOrEqual(number | bigint)
.toBe
.toBeDefined()
.toBeCloseTo(number, numDigits?)

#### string

.toBeFalsy()
.toBeTruthy()
.toBeNull()
.toMatch(regexp | string)
.toHaveLength(number)

#### object

.toBeUndefined()
.toHaveProperty(keyPath, value?)
.toBeNaN()
.toStrictEqual(value)
.toMatchObject(object)

#### array

.toContain(item)
.toHaveLength(number)
expect.arrayContaining(array)
expect.not.arrayContaining(array)
