<!-- NeonText.svelte -->
<script lang="ts">
  // Определяем доступные цвета
  type ColorOption = 'cyan' | 'magenta' | 'yellow' | 'green' | 'red';

  // Состояние — выбранный цвет
  let selectedColor: ColorOption = 'cyan';

  // Функция для смены цвета
  function setColor(color: ColorOption) {
    selectedColor = color;
  }

  // Вычисляем CSS-переменную для текущего цвета (можно добавить логику изменения оттенка)
  $: customStyle = {
    '--glow-color': selectedColor,
  };
</script>

<div class="container">
  <p class="neon-text" style={customStyle}>
    123321
  </p>

  <div class="controls">
    {#each ['cyan', 'magenta', 'yellow', 'green', 'red'] as color}
      <button
        class="color-btn {color}"
        class:active={selectedColor === color}
        on:click={() => setColor(color as ColorOption)}
      >
        {color}
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    background-color: #111;
    min-height: 100vh;
  }

  .neon-text {
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Arial Black', sans-serif;
    color: white;
    text-transform: uppercase;
    letter-spacing: 4px;

    // CSS-переменная для цвета свечения (будет подставляться из JS)
    --glow-color: rgb(255, 0, 0);

    // Само свечение: несколько теней с размытием
    text-shadow:
      0 0 8px var(--glow-color),
      0 0 16px var(--glow-color),
      0 0 24px var(--glow-color),
      0 0 32px var(--glow-color);

    // Плавный переход при смене цвета
    transition: text-shadow 0.3s ease;
  }

  .controls {
    display: flex;
    gap: 1rem;
  }

  .color-btn {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    background-color: #333;
    color: white;
    transition: all 0.2s;

    // Цветные варианты кнопок
    &.cyan {
      &:hover, &.active {
        background-color: cyan;
        color: black;
        box-shadow: 0 0 15px cyan;
      }
    }
    &.magenta {
      &:hover, &.active {
        background-color: magenta;
        color: black;
        box-shadow: 0 0 15px magenta;
      }
    }
    &.yellow {
      &:hover, &.active {
        background-color: yellow;
        color: black;
        box-shadow: 0 0 15px yellow;
      }
    }
    &.green {
      &:hover, &.active {
        background-color: limegreen;
        color: black;
        box-shadow: 0 0 15px limegreen;
      }
    }
    &.red {
      &:hover, &.active {
        background-color: rgb(205, 50, 50);
        color: black;
        box-shadow: 0 0 15px rgb(205, 50, 50);
      }
    }
  }
</style>