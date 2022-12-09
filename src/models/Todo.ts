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