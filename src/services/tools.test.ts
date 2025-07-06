import { test, expect, describe } from 'vitest';
import { format, formatDiameter, formatPopulation } from './tools.ts';
describe('test des fonctions de formatage', () => {
  test('test de la fonction format avec une valeur', () => {
    const formatValue = format('JarJar Binks');
    expect(formatValue).toBe('JarJar Binks');
  });
  test('test de la fonction format avec une valeur "unknown"', () => {
    const formatValue = format('unknown');
    expect(formatValue).toBe('-');
  });
  test('test de la fonction formatPopulation avec "unknown"', () => {
    const formatValue = formatPopulation('unknown');
    expect(formatValue).toBe('-');
  });
  test('test de la fonction formatPopulation avec une valeur inferieur à 1000', () => {
    const formatValue = formatPopulation('100');
    expect(formatValue).toBe('100');
  });
  test('test de la fonction formatPopulation avec une valeur superieur à mille', () => {
    const formatValue = formatPopulation('10000');
    expect(formatValue).toBe('10.0K');
  });
  test('test de la fonction formatPopulation avec une valeur supperieur à un milion', () => {
    const formatValue = formatPopulation('10000000');
    expect(formatValue).toBe('10.0M');
  });
  test('test de la fonction formatPopulation avec une valeur superieur à un milliard', () => {
    const formatValue = formatPopulation('1000000000');
    expect(formatValue).toBe('1.0B');
  });
  test('test de la fonction formatDiameter avec "unknown"', () => {
    const formatValue = formatDiameter('unknown');
    expect(formatValue).toBe('-');
  });
  test('test de la fonction formatDiameter avec une valeur', () => {
    const formatValue = formatDiameter('10000');
    expect(formatValue).toBe('10,000 km');
  });
});
