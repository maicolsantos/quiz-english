import type { Options as OptionsType } from '@/@types/quiz'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

type OptionsProps = {
  options: OptionsType
  correctOption: string
}

export const Options = ({ options, correctOption }: OptionsProps) => {
  console.log(options, correctOption)

  return (
    <RadioGroup className="space-y-2">
      {Object.keys(options).map((option) => (
        <div key={option} className="flex items-center space-x-2">
          <RadioGroupItem value={option} id={option} />
          <Label htmlFor={option}>{options[option]}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}
