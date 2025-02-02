<script setup>
import { NTable } from "naive-ui";
</script>

<template>
  <n-table :single-line="false" style="width: 100%">
    <thead>
      <tr>
        <th>Stage</th>
        <th>Name</th>
        <th>Description</th>
        <th>Independence level</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mild</td>
        <td>Mild memory loss, trouble planning, word-finding issues</td>
        <td>Fully independent</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Moderate</td>
        <td>Severe memory loss, confusion, disorientation, needs assistance</td>
        <td>Needs partial supervision</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Severe</td>
        <td>Cannot communicate, loss of motor function, bedridden</td>
        <td>Fully dependent</td>
      </tr>
    </tbody>
  </n-table>
</template>