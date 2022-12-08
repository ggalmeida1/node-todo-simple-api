import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/pg'

export interface ITodoInstance extends Model {
    id: number
    title: string
    done: boolean
}

export const Todo = sequelize.define<ITodoInstance>('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.NUMBER
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'todos',
    timestamps: false
})

export function all(arg0: string, all: any) {
    throw new Error('Function not implemented.')
}


export function add(arg0: string, add: any) {
    throw new Error('Function not implemented.')
}


export function update(arg0: string, update: any) {
    throw new Error('Function not implemented.')
}


export function remove(arg0: string, remove: any) {
    throw new Error('Function not implemented.')
}

export function delete(arg0: string, delete: any) {
    throw new Error('Function not implemented.')
}
